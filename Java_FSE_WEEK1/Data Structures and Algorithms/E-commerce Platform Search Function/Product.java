public class Product{
    int productId;
    String productName;
    String category;

    public Product(int productId,String productName, String category)
    {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }

    public String toString()
    {
        return "Product ID: "+productId+",Product Name: "+ productName +",category: " + category;
    }
}