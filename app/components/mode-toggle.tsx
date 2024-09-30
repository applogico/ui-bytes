import { Moon, Sun } from 'lucide-react'
import { useMemo } from 'react'
import { Theme, useTheme } from 'remix-themes'
import { Toggle } from '~/components/ui/toggle.tsx'

export function ModeToggle() {
  const [theme, setTheme] = useTheme()

  const Icon = useMemo(() => {
    if (theme === 'light') {
      return Sun
    }
    return Moon
  }, [theme])

  return (
    <Toggle
      aria-label="Toggle theme"
      onClick={() =>
        setTheme((theme) =>
          theme === Theme.DARK
            ? Theme.LIGHT
            : Theme.DARK,
        )
      }
    >
      <Icon />
    </Toggle>
  )
}
