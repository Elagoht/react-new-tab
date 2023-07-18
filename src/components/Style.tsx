import { FC, useEffect, useState } from 'react'
import { useSettings } from '../assets/utils/contexts'

const Style: FC = () => {

  const [style, setStyle] = useState<string>("")
  const { settings } = useSettings()

  useEffect(() => {
    switch (settings.blur) {
      case 0:
        setStyle(`--tw-backdrop-blur: blur(0);`)
        break
      case 1:
        setStyle(`--tw-backdrop-blur: blur(4px);`)
        break
      case 2:
        setStyle(`--tw-backdrop-blur: blur(12px);`)
        break
      case 3:
        setStyle(`--tw-backdrop-blur: blur(24px);`)
        break
    }
  }, [settings.blur])

  return <style>{`.glass {
  ${style}
}
.container {
  ${style}
}
.card {
  ${style}
}`}</style>
}

export default Style