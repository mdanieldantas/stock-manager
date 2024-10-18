import { createContext, useState } from "react";
import PropTypes, { object } from "prop-types";

export const StockContext = createContext({});

StockContextProvider.propTypes = {
  children: PropTypes.node,
};
// item
// {name, description, quantity, price, category, createdAt, updatedAt}

export function StockContextProvider({ children }) {
  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem("obc-react-stock");
    if (!storedItems) return [];
    const items = JSON.parse(storedItems);
    items.forEach((item) => {
      item.createdAt = new Date(item.createdAt);
      item.updatedAt = new Date(item.updatedAt);
    });
    return items;
  });

  const addItem = (item) => {
    setItems((currentState) => {
      const updateItems = [item, ...currentState];
      localStorage.setItem("obc-react-stock", JSON.stringify(updateItems));
      return updateItems;
    });
  };

  const getItem = (itemId) => {
    return items.find((item) => item.id === +itemId);
  };

  const updateItem = (itemId, newAttributes) => {
      setItems(currentState => {
          const itemIndex = currentState.findIndex(item => item.id === +itemId)
          const updateItems = [...currentState]
          object.assingn(updateItems[itemIndex], newAttributes, {updatedAt:new Date()})
          localStorage.setItem("obc-react-stock", JSON.stringify(updateItems))
          return updateItems
      })
  }

  const deleteItem = (itemId) => {
    setItems((currentState) => {
      const updateItems = currentState.filter((item) => item.id !== itemId);
      localStorage.setItem("obc-react-stock", JSON.stringify(updateItems));
      return updateItems;
    });
  };

  const stock = {
    items,
    addItem,
    deleteItem,
    getItem,
    updateItem
  };

  return (
    <StockContext.Provider value={stock}>{children}</StockContext.Provider>
  );
}
