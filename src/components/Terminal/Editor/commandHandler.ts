export const AVAILABLE_COMMANDS = ["help", "source", "contact", "works"] as const

type Command = typeof AVAILABLE_COMMANDS[number]

interface Handler {
  output: string
  effect?: () => void
}

const commandToHandler: Record<Command, Handler> = {
  help: {
    output: `Available commands: <b>about</b>, <b>works</b>, <b>contact</b>, <b>source</b>`,
  },
  works: {
    output: `<ul>
      <li>
        <p><a href="https://uchi.ru">Uchi.ru</a> - World's second most visited education platform</p>
      </li>
      <li>
        <p><a href="https://simbirsoft.com">SimbirSoft</a> - Software development services for banks and retail companies.</p>
      </li>
      <li>
        <p><a href="https://gnosis.io">Gnosis</a> - decentralized prediction market platform and the most secure crypto wallet for Ethereum assets.</p>
      </li>`,
  },
  contact: {
    output: `<a href="mailto:hello@mikheevm.com">hello@mikheevm.com</a>`,
  },
  source: {
    effect: () => {
      window.open("https://github.com/mikheevm/personal-website")
    },
    output: ``,
  },
}

export const handleCommand = (command: string): string => {
  const commandHandler = commandToHandler[command as Command]

  if (commandHandler) {
    commandHandler.effect?.()

    return commandHandler.output
  }

  return `command not found: ${command}`
}
