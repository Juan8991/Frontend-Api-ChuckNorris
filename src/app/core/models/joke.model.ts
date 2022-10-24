export interface JokeFromBackend {
  icon_url:string|undefined|null,
  id:string|undefined|null,
  url:string|undefined|null,
  value: string|undefined|null
}
export interface JokeToBackend {
  iconUrl:string|undefined|null,
  id:string|undefined|null,
  url:string|undefined|null,
  value: string|undefined|null,
  userId:number|undefined|null
}

export interface JokesToShow {
  jokes:JokeToBackend[]
}


