class Movie{
  public static counter=0;
  id: number
  title: string
  gender: string
  constructor(title: string, gender: string){
      this.id = ++Movie.counter;
      this.title = title;
      this.gender = gender;
  }
}
export default Movie;
