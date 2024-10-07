import {
  type LinksFunction,
  type LoaderFunctionArgs,
  type MetaFunction,
} from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react'
import clsx from 'clsx'
import React from 'react'
import {
  PreventFlashOnWrongTheme,
  ThemeProvider,
  useTheme,
} from 'remix-themes'
import { themeSessionResolver } from './sessions.server'

import Header from '~/components/header.tsx'
import stylesheet from '~/tailwind.css?url'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
  {
    rel: 'preconnect',
    href: 'https://fonts.googleapis.com',
  },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  },
]

export const meta: MetaFunction = () => {
  return [
    { title: 'UI Bytes' },
    {
      name: 'description',
      content:
        'UI, Front end, Software engineer, news',
    },
  ]
}

export async function loader({
  request,
}: LoaderFunctionArgs) {
  const { getTheme } =
    await themeSessionResolver(request)
  return {
    theme: getTheme(),
  }
}

export function App() {
  const data = useLoaderData<typeof loader>()
  const [theme] = useTheme()

  return (
    <html lang="en" className={clsx(theme)}>
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-D30L2DNDQX"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
             window.dataLayer = window.dataLayer ||[];
             function gtag() {
               window.dataLayer.push(arguments)
             }
             gtag('js', new Date()); 
             gtag('config', 'G-D30L2DNDQX');
          `,
          }}
        />
        <Meta />
        <PreventFlashOnWrongTheme
          nonce="test"
          ssrTheme={Boolean(data.theme)}
        />

        <Links />
      </head>
      <body>
        <div className="relative flex min-h-screen flex-col bg-background">
          <Header />
          <main className="flex-1">
            <div className="container relative mx-auto max-w-screen-lg">
              <Outlet />
            </div>
          </main>
          <footer className="flex flex-col items-center justify-center p-4 py-6 md:px-8">
            <span className="block text-sm text-gray-500 dark:text-gray-400 sm:text-center">
              © 2024{' '}
              <a
                href="https://applogi.co"
                className="hover:underline"
              >
                Applogico LLC
              </a>
              . All Rights Reserved.
            </span>
          </footer>
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function AppWithProviders() {
  const data = useLoaderData<typeof loader>()
  return (
    <ThemeProvider
      disableTransitionOnThemeChange={true}
      specifiedTheme={data.theme}
      themeAction="/action/set-theme"
    >
      <App />
    </ThemeProvider>
  )
}
