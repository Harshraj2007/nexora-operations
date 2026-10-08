import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const Icon = ({name, size=18}) => <span className={`icon icon-${name}`} style={{fontSize:size}} aria-hidden="true">{({grid:'▦', chart:'↗', box:'◇', orders:'≡', users:'♙', inventory:'▤', invoice:'▧', support:'?', settings:'⚙', search:'⌕', bell:'◉', plus:'+', more:'•••', arrow:'→', down:'⌄', close:'×', check:'✓', warning:'!', cart:'⌑', dollar:'$', sparkle:'✦'})[name] || '•'}</span>;

const initialProducts = [
  {id:'PRD-1024', name:'Aurora Pro Wireless', category:'Electronics', price:249, stock:142, accent:'violet'},
  {id:'PRD-1023', name:'Mono Ceramic Mug', category:'Home & Living', price:28, stock:18, accent:'orange'},
  {id:'PRD-1022', name:'Field Notes No. 04', category:'Stationery', price:16, stock:87, accent:'lime'},
  {id:'PRD-1021', name:'Arc Desk Lamp', category:'Home & Living', price:119, stock:6, accent:'blue'},
  {id:'PRD-1020', name:'Orbit Charging Dock', category:'Electronics', price:89, stock:54, accent:'pink'},
];
const initialOrders = [
  {id:'#10482', customer:'Elena Gilbert', initials:'EG', total:480, date:'Today, 10:42', status:'Processing'},
  {id:'#10481', customer:'Marcus Chen', initials:'MC', total:129, date:'Today, 09:18', status:'Shipped'},
  {id:'#10480', customer:'Olivia Bennett', initials:'OB', total:664, date:'Yesterday', status:'Delivered'},
  {id:'#10479', customer:'Noah Williams', initials:'NW', total:96, date:'Yesterday', status:'Delivered'},
];

function App() {
  const [active, setActive] = useState('Overview');
  const [products, setProducts] = useState(initialProducts);
  const [orders, setOrders] = useState(initialOrders);
  const [query, setQuery] = useState('');
  const [modal, setModal] = useState(false);
  const [notice, setNotice] = useState('');
  const nav = [['Overview','grid'],['Analytics','chart'],['Products','box'],['Orders','orders'],['Customers','users'],['Inventory','inventory'],['Invoices','invoice'],['Support','support']];
  const filteredProducts = useMemo(() => products.filter(p => `${p.name} ${p.category}`.toLowerCase().includes(query.toLowerCase())), [products, query]);
  const showNotice = text => { setNotice(text); setTimeout(()=>setNotice(''), 2600); };
  const createProduct = e => { e.preventDefault(); const f = new FormData(e.currentTarget); const item = {id:`PRD-${1025+products.length}`, name:f.get('name'), category:f.get('category'), price:Number(f.get('price')), stock:Number(f.get('stock')), accent:'violet'}; setProducts([item,...products]); setModal(false); showNotice(`${item.name} added to your catalogue`); };
  const advanceOrder = id => { setOrders(orders.map(o => o.id === id ? {...o, status:o.status==='Processing'?'Shipped':o.status==='Shipped'?'Delivered':'Delivered'} : o)); showNotice('Order status updated'); };
  return <div className="shell">
    <aside className="sidebar">
      <div className="brand"><span className="brand-mark"><i></i><i></i><i></i></span><span>NEXORA</span></div>
      <div className="workspace"><span className="mini-avatar">N</span><div><b>Nexora Studio</b><small>Enterprise workspace</small></div><Icon name="down"/></div>
      <nav>{nav.map(([label,icon])=><button key={label} className={active===label?'active':''} onClick={()=>{setActive(label); if(label!=='Overview') showNotice(`${label} module is ready for expansion`);}}><Icon name={icon}/>{label}</button>)}</nav>
      <div className="sidebar-bottom"><button><Icon name="settings"/>Settings</button><div className="help"><span><Icon name="sparkle"/></span><b>Need a hand?</b><p>Explore our quick-start guide.</p><a href="#guide">View guide <Icon name="arrow"/></a></div></div>
    </aside>
    <main>
      <header><div className="mobile-brand">NEXORA</div><div className="global-search"><Icon name="search"/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search products, orders, customers..."/><kbd>⌘ K</kbd></div><div className="header-actions"><button className="icon-button"><Icon name="bell"/><em></em></button><button className="profile"><span>AH</span><div><b>Alex Harper</b><small>Administrator</small></div><Icon name="down"/></button></div></header>
      <section className="content">
        <div className="title-row"><div><p className="eyebrow">THURSDAY, 08 OCTOBER</p><h1>{active === 'Overview' ? 'Good morning, Alex.' : active}</h1><p className="sub">{active === 'Overview' ? "Here’s what’s happening with your business today." : `Manage your ${active.toLowerCase()} from one place.`}</p></div><button className="primary" onClick={()=>setModal(true)}><Icon name="plus"/> Add product</button></div>
        <div className="metrics"><Metric icon="dollar" label="Total revenue" value="$48,290" change="12.5%" good/><Metric icon="cart" label="Orders" value="1,248" change="8.2%" good/><Metric icon="users" label="Customers" value="8,422" change="5.7%" good/><Metric icon="warning" label="Low stock items" value="12" change="3 items"/></div>
        <section className="performance panel"><div className="panel-head"><div><h2>Revenue performance</h2><p>Sales overview for the last 30 days</p></div><div className="chart-actions"><button className="seg active">Revenue</button><button className="seg">Orders</button><button className="select">Last 30 days <Icon name="down"/></button></div></div><div className="chart-wrap"><div className="chart-labels"><span>$4k</span><span>$3k</span><span>$2k</span><span>$1k</span><span>$0</span></div><div className="chart"><div className="gridlines"></div><svg viewBox="0 0 740 220" preserveAspectRatio="none"><defs><linearGradient id="area" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#6f5be8" stopOpacity=".29"/><stop offset="1" stopColor="#6f5be8" stopOpacity="0"/></linearGradient></defs><path d="M0,180 C22,176 32,140 55,153 S95,180 112,125 S152,68 172,97 S205,123 230,104 S260,133 282,88 S322,66 341,97 S372,132 397,114 S433,64 454,75 S493,98 516,68 S554,85 574,55 S612,73 630,42 S676,63 698,33 S725,40 740,18 L740,220 L0,220 Z" fill="url(#area)"/><path d="M0,180 C22,176 32,140 55,153 S95,180 112,125 S152,68 172,97 S205,123 230,104 S260,133 282,88 S322,66 341,97 S372,132 397,114 S433,64 454,75 S493,98 516,68 S554,85 574,55 S612,73 630,42 S676,63 698,33 S725,40 740,18" fill="none" stroke="#705be7" strokeWidth="3"/></svg><div className="point"><span>$3,842</span></div></div><div className="chart-dates"><span>Sep 09</span><span>Sep 14</span><span>Sep 19</span><span>Sep 24</span><span>Sep 29</span><span>Oct 04</span><span>Oct 08</span></div></div></section>
        <div className="two-col"><section className="panel"><div className="panel-head"><div><h2>Recent orders</h2><p>Your latest customer purchases</p></div><button className="text-button" onClick={()=>setActive('Orders')}>View all <Icon name="arrow"/></button></div><div className="orders">{orders.map(o=><div className="order" key={o.id}><span className="customer-avatar">{o.initials}</span><div className="order-person"><b>{o.customer}</b><small>{o.id} · {o.date}</small></div><div className="order-total"><b>${o.total.toFixed(2)}</b><button className={`status ${o.status.toLowerCase()}`} onClick={()=>advanceOrder(o.id)}>{o.status}</button></div><button className="dots" onClick={()=>advanceOrder(o.id)}><Icon name="more"/></button></div>)}</div></section>
          <section className="panel inventory"><div className="panel-head"><div><h2>Inventory alert</h2><p>Products that need your attention</p></div><button className="text-button" onClick={()=>setActive('Inventory')}>View inventory <Icon name="arrow"/></button></div>{products.filter(p=>p.stock<30).slice(0,3).map(p=><div className="stock-item" key={p.id}><span className={`product-art ${p.accent}`}></span><div><b>{p.name}</b><small>{p.id}</small></div><div className="stock-count"><b>{p.stock} left</b><div><i style={{width:`${Math.min(p.stock/30*100,100)}%`}}></i></div></div></div>)}</section></div>
        <section className="catalogue panel"><div className="panel-head"><div><h2>Product catalogue</h2><p>{filteredProducts.length} active products</p></div><button className="text-button" onClick={()=>setModal(true)}>Add product <Icon name="arrow"/></button></div><div className="product-grid">{filteredProducts.map(p=><article key={p.id}><span className={`product-art large ${p.accent}`}></span><small>{p.category}</small><b>{p.name}</b><div><strong>${p.price}</strong><span>{p.stock} in stock</span></div></article>)}</div></section>
      </section>
    </main>
    {notice && <div className="toast"><Icon name="check"/> {notice}</div>}
    {modal && <div className="overlay" onMouseDown={()=>setModal(false)}><form className="modal" onSubmit={createProduct} onMouseDown={e=>e.stopPropagation()}><button type="button" className="modal-close" onClick={()=>setModal(false)}><Icon name="close"/></button><p className="eyebrow">CATALOGUE</p><h2>Add a product</h2><p className="sub">Create an item for your store and inventory.</p><label>Product name<input autoFocus name="name" required placeholder="e.g. Atlas Office Chair"/></label><label>Category<select name="category"><option>Electronics</option><option>Home & Living</option><option>Stationery</option></select></label><div className="form-row"><label>Price<input name="price" min="0" step="0.01" type="number" required placeholder="0.00"/></label><label>In stock<input name="stock" min="0" type="number" required placeholder="0"/></label></div><button className="primary wide" type="submit">Create product <Icon name="arrow"/></button></form></div>}
  </div>;
}
function Metric({icon,label,value,change,good}) { return <article className="metric"><span className={`metric-icon ${good?'good':''}`}><Icon name={icon}/></span><div><p>{label}</p><h2>{value}</h2><small className={good?'positive':'neutral'}>{good && '↗ '}{change} <span>vs last month</span></small></div></article> }
createRoot(document.getElementById('root')).render(<App/>);
