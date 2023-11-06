class Movie{
  public static counter=0
  id: number
  constructor(title: string, gender: string,){
      this.id = ++Movie.counter
  }
}
