import { Input } from 'antd';

const Search = Input.Search;

ReactDOM.render(
<div className={123}>
<Search
placeholder="input search text"
onSearch={value => console.log(value)}
style={{ width: 200 }}
/>
<br />
<br />
<Search placeholder="input search text" onSearch={value => console.log(value)} enterButton />
<br />
<br />
<Search
placeholder="input search text"
enterButton="Search"
size="large"
onSearch={value => console.log(value)}
/>
</div>,
mountNode,
);
