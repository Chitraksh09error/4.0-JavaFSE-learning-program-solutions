
import java.util.Arrays;
import java.util.Comparator;


public class Test {
    
    public static void main(String[] args) {
        
        Product[] product = {
            new Product(1,"Watch","Accessories"),
            new Product(2,"Shirt","Clothings"),
            new Product(3,"Mobile","Accessories"),
            new Product(4,"Pants","Clothings"),
            new Product(5,"Shoes","Clothings"),
            new Product(5,"Chains","Accessories")
        };

        //calling linearsearch method in SearchProduct.java
        System.out.println("Linear Search :");
        Product find1 = SearchProduct.LinearSearch(product,"shirt");
        if(find1 != null)
        {
            System.out.println("Product Found!");
            System.out.println("description: "+find1);
        }
        else
            System.out.println("Product not found");


        //for Binary Search we need to first sort productName in dictionary order using Arrays.sort()
        Arrays.sort(product, Comparator.comparing(p -> p.productName.toLowerCase()));
        System.out.println("Binary Search :");
        Product find2 = SearchProduct.BinarySearch(product,"mobile");
        if(find2 != null)
        {
            System.out.println("Product Found!");
            System.out.print("Description: "+find2);
        }
        else
            System.out.println("Product not found");




    }
}
