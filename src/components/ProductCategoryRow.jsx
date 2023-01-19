// export default function ProductCategoryRow({ category }) {
//   return (
//     <tr>
//       <th colSpan={"2"}>{category}</th>
//     </tr>
//   );
// }
import React from "react";
class ProductCategoryRow extends React.Component {
  constructor(props) {
    super(props);
  }
  category = this.props.category;
  render() {
    return (
      <tr>
        <th colSpan={"2"}>{this.category}</th>
      </tr>
    );
  }
}

export default ProductCategoryRow;
