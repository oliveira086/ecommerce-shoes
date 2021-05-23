export function Limiter (name: string) {
  let nameLimited = name.substr(0,20);

  return nameLimited + '...'
}