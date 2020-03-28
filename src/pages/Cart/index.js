import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th> </th>
            <th>PROTUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="https://static.netshoes.com.br/produtos/tenis-adidas-run-falcon-masculino/06/COL-6981-006/COL-6981-006_zoom2.jpg?ts=1584623858&ims=326x"
                alt="Tênis"
              />
            </td>
            <td>
              <strong>Tênis muito massa</strong>
              <span>R$ 129,00</span>
            </td>
            <td>
              <div>
                <MdRemoveCircleOutline size={20} color="#7159c1" />
                <input type="number" readOnly value={1} />
                <MdAddCircleOutline size={20} color="#7159c1" />
              </div>
            </td>
            <td>
              <strong>R$248,00</strong>
            </td>
            <td>
              <MdDelete size={20} color="#7159c1" />
            </td>
            <td />
          </tr>
        </tbody>
      </ProductTable>
      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>R$ 1290,00</strong>
        </Total>
      </footer>
    </Container>
  );
}
