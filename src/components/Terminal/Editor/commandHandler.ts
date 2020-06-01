export const AVAILABLE_COMMANDS = ["help", "about", "source", "contact", "works"] as const

type Command = typeof AVAILABLE_COMMANDS[number]

const commandToHandler = {
  help: {
    output: `Available commands: <b>about</b>, <b>works</b>, <b>contact</b>, <b>source</b>`,
  },
  about: {
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

export const handleCommand = (command: Command | string): string => {
  const commandHandler = commandToHandler[command]

  if (commandHandler) {
    commandHandler.effect?.()

    return commandHandler.output
  }

  return `command not found: ${command}`
}
