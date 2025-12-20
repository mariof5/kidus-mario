import React from 'react';
import styles from './Booking.module.css';

export function Booking() {
  const iframeSrcDoc = `<!DOCTYPE html>
<html>
    <head>
        <style>
            html, body {
                margin: 0;
                padding: 0;
                background: transparent;
            }

            body {
                display: flex;
                justify-content: center;
                align-items: center;
                background: transparent;
            }

            :root {
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
            }

            * {
                box-sizing: border-box;
                -webkit-font-smoothing: inherit;
            }

            h1, h2, h3, h4, h5, h6, p, figure {
                margin: 0;
            }

            body, input, textarea, select, button {
                font-size: 12px;
                font-family: sans-serif;
            }

            /* Dark mode variables */
            :root {
                --bg-primary: #ffffff;
                --text-primary: #000000;
            }

            [data-theme="dark"] {
                --bg-primary: #000000;
                --text-primary: #FFFFFF;
            }

            body {
                background-color: var(--bg-primary);
                color: var(--text-primary);
            }
        </style>
    </head>
    <body>
<!-- Cal inline embed code begins -->
<div style="width:100%;height:100%;overflow:scroll" id="my-cal-inline-30min"></div>

<script type="text/javascript">
  (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document;
    C.Cal = C.Cal || function () {
      let cal = C.Cal; let ar = arguments;
      if (!cal.loaded) {
        cal.ns = {}; cal.q = cal.q || [];
        d.head.appendChild(d.createElement("script")).src = A;
        cal.loaded = true;
      }
      if (ar[0] === L) {
        const api = function () { p(api, arguments); };
        const namespace = ar[1];
        api.q = api.q || [];
        if (typeof namespace === "string") {
          cal.ns[namespace] = cal.ns[namespace] || api;
          p(cal.ns[namespace], ar);
          p(cal, ["initNamespace", namespace]);
        } else p(cal, ar);
        return;
      }
      p(cal, ar);
    };
  })(window, "https://app.cal.com/embed/embed.js", "init");

  Cal("init", "30min", { origin: "https://app.cal.com" });

  Cal.ns["30min"]("inline", {
    elementOrSelector: "#my-cal-inline-30min",
    config: { "layout": "month_view" },
    calLink: "saint-mario/30min",
  });

  Cal.ns["30min"]("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
</script>
<!-- Cal inline embed code ends -->

        <script type="module">
            let height = 0

            function sendEmbedHeight() {
                window.parent.postMessage({
                    embedHeight: height
                }, "*")
            }

            const observer = new ResizeObserver((entries) => {
                if (entries.length !== 1) return
                const entry = entries[0]
                if (entry.target !== document.body) return

                height = entry.contentRect.height
                sendEmbedHeight()
            })

            observer.observe(document.body)

            window.addEventListener("message", (event) => {
                if (event.source !== window.parent) return
                if (event.data !== "getEmbedHeight") return
                sendEmbedHeight()
            })

            // Detect dark mode from parent
            function detectTheme() {
                const html = document.documentElement;
                return html.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
            }

            // Update iframe theme when parent theme changes
            const themeObserver = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (mutation.attributeName === 'data-theme') {
                        document.body.setAttribute('data-theme', detectTheme());
                    }
                });
            });

            themeObserver.observe(window.parent.document.documentElement, {
                attributes: true,
                attributeFilter: ['data-theme']
            });

            // Set initial theme
            document.body.setAttribute('data-theme', detectTheme());
        </script>
    </body>
</html>`;

  return (
    <div className={styles.wrapper}>
      <div className={styles.iframeContainer}>
        <iframe
          srcDoc={iframeSrcDoc}
          className={styles.iframe}
          title="Booking Scheduler"
          allowFullScreen
        />
      </div>
    </div>
  );
}