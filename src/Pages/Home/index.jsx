import { useContext } from "react"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetail from "../../Components/ProductDetail"
import { ShoppingCartContext } from "../../Context"

function Home() {
  const context = useContext(ShoppingCartContext)

  const renderView = () => {

    if (context.filteredItems?.length > 0) {
      return (
        context.filteredItems?.map(item => (
          <Card key={item.id} data={item} />
        ))
      )
    } else {
      return (
        <div>0 products found :(</div>
      )
    }
  }


return (
  <Layout className='bg-red-100'>
    <div className="flex items-center justify-center w-80 relative text-xl">
      <h1>Home</h1>
    </div>
    <input
      className="rounded-lg border border-gray-300 w-80 p-3 mb-6 mt-6 focus:outline-none"
      type="text"
      placeholder="Search products"
      onChange={(event) => context.setSearchByTitle(event.target.value)}
    />
    <div className="grid gap-6 grid-cols-4 w-full max-w-screen-lg mb-5">
      {renderView()}
    </div>
    <ProductDetail />
  </Layout>
)
}

export default Home
