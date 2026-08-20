import Product from './components/Product';

function App(){
  return (
    <div>
      <Product name="Desktop" price="25000" category="Electronics" rating="5"/>
      <Product name="Apple" price="30000" category="Electronics" rating="5"/>
      <Product name="Samsung" price="50000" category="Electronics" rating="5"/>
      <Product name="OnePlus" price="40000" category="Electronics" rating="5"/>
      <Product name="Xiaomi" price="15000" category="Electronics" rating="5"/>
    </div>
  )
}

export default App;