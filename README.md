# React-Shop_project
React를 사용하여 만든 [Shop](https://strong-marshmallow-e49402.netlify.app/) 프로젝트입니다.

## 1. 주요 기능
### Home
- 네비게이션 바를 통한 홈 및 장바구니로의 이동이 가능합니다.
- 홈 페이지에서는 신발 목록을 볼 수 있으며, "더보기" 버튼을 통해 추가적인 상품을 로드할 수 있습니다.
- 원하는 신발 상품을 클릭 하면 상세 페이지로 이동합니다.

### 상세 페이지
- 상세 페이지에서는 상품의 이미지 및 상세 정보를 확인할 수 있습니다.
- 주문하기 버튼을 통해 상품을 장바구니에 추가할 수 있습니다.
- 하단의 탭을 통해 다양한 정보를 확인할 수 있습니다.

### Cart
- 장바구니 페이지에서는 현재 장바구니에 담긴 상품 목록을 확인할 수 있습니다.
- 각 상품의 수량을 추가할 수 있습니다.

## 2. 컴포넌트 상세 내용
### App 컴포넌트 (App.js)
메인 컴포넌트로 전체 애플리케이션의 레이아웃을 담당합니다. 네비게이션 바, 라우팅, 그리고 메인 콘텐츠를 포함하고 있습니다.
```jsx
// ... (import 및 context 관련 코드)

function App() {
  // ... (state 및 navigate 로직)

  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        {/* ... (Navbar 컴포넌트) */}
      </Navbar>

      <Routes>
        {/* ... (홈, 디테일, 카트 페이지에 대한 라우트) */}
      </Routes>
    </div>
  );
}

// ... (Card 컴포넌트 및 내보내기 문)

```
### Card 컴포넌트 (Card.js)
홈 페이지에서 개별 신발 아이템을 카드 형태로 표시하는 컴포넌트입니다. App.js에서 이 컴포넌트를 사용하여 신발 그리드를 렌더링합니다.
```jsx
function Card(props) {
  return (
    <div className="col-md-4">
      <Link to={`/detail/${props.i}`} key={props.i}>
        {/* ... (이미지 및 디테일 페이지로의 링크) */}
      </Link>
      <h5>{props.shoes.title}</h5>
      <p>{props.shoes.price}</p>
    </div>
  );
}

export default Card;

```
### Detail 컴포넌트 (Detail.js)
선택한 신발에 대한 상세 정보를 표시하는 컴포넌트로, 이미지, 설명, 탭을 통한 추가 콘텐츠, 그리고 장바구니에 추가하는 기능을 제공합니다.
```jsx
function Detail(props) {
  // ... (알림을위한 상태 및 useEffect)

  return (
    <div className="container">
      {/* ... (시간 제한된 할인을 위한 알림) */}
      <div className="row">
        <div className="col-md-6">
          {/* ... (선택한 신발의 이미지) */}
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{찾은상품.title}</h4>
          {/* ... (설명, 가격 및 주문 버튼) */}
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey="link0">
        {/* ... (내비게이션 탭) */}
      </Nav>
      <TabContent 탭={탭} />
    </div>
  );
}

function TabContent({ 탭 }) {
  // ... (콘텐츠가 사라지는데 사용되는 상태 및 useEffect)

  return (
    <div className={`start ` + fade}>
      {/* ... (각 탭에 대한 콘텐츠) */}
    </div>
  );
}

export default Detail;

```
### Cart 컴포넌트 (Cart.js)
장바구니에 추가된 상품을 표시하는 컴포넌트입니다. 각 항목의 수량을 확인하고 증가시킬 수 있는 기능을 제공합니다.
```jsx
function Cart() {
  // ... (상태 및 디스패치 설정)

  return (
    <div>
      <h6>kim의 장바구니</h6>
      <Table>
        {/* ... (테이블 헤더 및 장바구니 아이템 목록) */}
      </Table>
    </div>
  );
}

export default Cart;

```
## 3. 데이터 관리
### Data.js
단순한 데이터 파일로, 신발 객체의 배열을 포함하고 있습니다. 각 객체에는 ID, 제목, 내용, 가격이 포함되어 있습니다.
```jsx
let data = [
  { id: 0, title: "White and Black", content: "Born in France", price: 120000 },
  { id: 1, title: "Red Knit", content: "Born in Seoul", price: 110000 },
  { id: 2, title: "Grey Yordan", content: "Born in the States", price: 130000 },
];

export default data;

```
### Store.js
Redux Toolkit을 사용하여 장바구니 상태를 관리하기 위한 Redux 스토어 설정입니다.
```jsx
// ... (Redux toolkit 관련 코드)

let cart = createSlice({
  // ... (장바구니 아이템 관리 리듀서)
});

export let { addCount, addItem } = cart.actions;

export default configureStore({
  reducer: {
    cart: cart.reducer,
  },
});

```

## 4. 사용된 라이브러리
- [React Bootstrap](https://react-bootstrap.github.io/) : 네비게이션 바 및 테이블 스타일링에 사용됨.
- [React Router DOM](https://reactrouter.com/en/main) : 페이지 간 라우팅을 처리함.
- [Redux Toolkit](https://redux-toolkit.js.org/) : 장바구니 상태 관리에 사용됨.
- [axios](https://axios-http.com/) : HTTP 요청을 위해 사용됨.
