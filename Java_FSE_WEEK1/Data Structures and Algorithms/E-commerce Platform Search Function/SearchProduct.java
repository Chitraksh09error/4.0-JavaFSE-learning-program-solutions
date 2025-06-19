public class SearchProduct {
    // applying linear search using productName
    public static Product LinearSearch(Product[] products , String productName)
    {
        for(Product pro : products)
        {
            if(pro.productName.equalsIgnoreCase(productName))
            {
                return pro;
            }
        }

        return null;
    }

    // applying Binary Search for productName
    public static Product BinarySearch(Product[] products, String productName)
    {
        int low = 0; int high = products.length-1;
        while( low<=high )
        {
            int mid = low + (high-low) / 2;
            int compared = products[mid].productName.compareToIgnoreCase(productName);
            if(compared == 0)
            {
                return products[mid];
            }
            else if(compared<0)
            {
                low = mid +1;
            }
            else{
                high = mid-1;
            }
        }
        return null;
    }
}
