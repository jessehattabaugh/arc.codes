import arc from '@architect/functions'
import enhance from '@enhance/ssr'
import styleTransform from '@enhance/enhance-style-transform'
import { getStyles } from '@enhance/arc-plugin-styles'

import elements from '@architect/views/landing/elements.mjs'

export async function handler () {
  const html = enhance({
    styleTransforms: [ styleTransform ],
    elements,
  })

  return {
    statusCode: 200,
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/html; charset=utf8'
    },
    body: html`
<!DOCTYPE html>
<html lang="en" class="overflow-x-hidden overflow-y-auto">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Architect is a simple framework for building and delivering powerful Functional Web Apps (FWAs) on AWS." />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@begin">
    <meta name="twitter:creator" content="@begin">
    <meta name="twitter:image:src" content="https://arc.codes${arc.static('arc.codes.png')}">

    <!-- Open Graph -->
    <meta name="og:image" content="https://arc.codes${arc.static('arc.codes.png')}">
    <meta name="og:site_name" content="OpenJSF Architect">
    <meta name="og:type" content="website">

    <!-- Styles + favicons -->
    <link rel="icon" type="image/png" sizes="32x32" href="https://assets.arc.codes/architect-favicon-32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="https://assets.arc.codes/architect-favicon-16.png">
    <link rel="icon" type="image/png" sizes="64x64" href="https://assets.arc.codes/architect-favicon-64.png">

    <title>Architect</title>

    ${getStyles.styleTag()}

    <style>
      @font-face {
        font-family: Montserrat;
        src: url('${arc.static('fonts/montserrat-subset-var.woff2')}') format("woff2-variations");
        src: url('${arc.static('fonts/montserrat-subset-var.woff2')}') format("woff2") tech("variations");
        font-weight: 100 900;
      }

      @font-face {
        font-family: Montserrat;
        src: ${arc.static('font/montserrat-italic-subset-var.woff2')} format("woff2-variations");
        src: ${arc.static('font/montserrat-italic-subset-var.woff2')} format("woff2") tech("variations");
        font-weight: 100 900;
        font-style: italic;
      }

      body {
        background-color: #efefef;
        color: var(--body);
        scrollbar-color: var(--gray-300) transparent;
        scrollbar-width: thin;
      }

      ::-webkit-scrollbar {
        inline-size: 8px;
        block-size: 8px;
      }

      ::-webkit-scrollbar-track {
        background-color: transparent;
      }

      ::-webkit-scrollbar-thumb {
        background-color: var(--gray-300);
        border-radius: 8px;
      }

      ::-webkit-scrollbar-corner {
        background-color: transparent;
      }

      .underline {
        text-underline-offset: 0.075em;
      }
    </style>
    <link rel="stylesheet" href="${arc.static('css/landing-syntax.min.css')}" />
  </head>
  <body class="font-sans leading4 overflow-x-hidden overflow-y-auto">
    <arc-landing></arc-landing>
  </body>
</html>
`
  }
}
