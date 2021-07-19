import endpoint from "./endpoint"

export default function auth() {
  const token = 'e621329d3a7dae54be2b685a98e87dc1dc7b5ebb20af6df4f6ee709b4968673f'
  fetch(`${endpoint}/Login/Autenticar?token=${token}`, { method: 'POST' })
}