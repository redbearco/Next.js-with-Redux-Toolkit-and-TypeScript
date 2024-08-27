import Link from 'next/link';
import Product from '../../../components/Product';
import { getAllProducts } from '../../../redux/actions/products';

export default async function page() {
  const products = await getAllProducts();
  return (
    <div className='bg-blue-50 py-8 px-8 min-h-screen'>
      <div>
        <div className="py-3 flex items-center justify-between max-w-4xl mx-auto">
          <h2>Product List ({products?.length ?? 0})</h2>
          <Link href={`/cart`}>View Cart</Link>
        </div>
        {
          products && products?.length > 0 ? (
            <div className="py-8 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {
                products?.map((item) => (
                  <Product item={item} key={item?.id} />
                ))
              }
            </div>
          ) : (
            <div className="py-8 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <p>No Product Find</p>
            </div>
          )
        }

      </div>
    </div>
  )
}
