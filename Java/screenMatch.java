public class MyClass {
  public static void main(String[] args) {
      System.out.println("This is Screen Match");
      System.out.println("Film: V for Vendetta");
      
      int releaseYear = 2006;
      System.out.println("Release year: " + releaseYear);
      boolean includedInSubscription = true;
      double filmRating = 8.1;
      
      //Média de notas ao filme
      double mean = (9.8 + 7.0 + 8.3) / 3;
      System.out.println(mean);
      
      String synopsis;
      synopsis = """
                Film V for Vendetta
                V for Vendetta  is a dystopian thriller set in a totalitarian United Kingdom
                Release year
                """ + releaseYear;
      System.out.println(synopsis);  
      
      int rating = (int) (mean / 2);
      System.out.println(rating);
  }
}
