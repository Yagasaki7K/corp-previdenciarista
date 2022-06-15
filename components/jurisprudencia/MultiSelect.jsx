/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { isEqual } from 'lodash';
  
const MultiSelect = (props) => {
  const [open, setOpen] = useState(false);
  const [usedDefaultValue, setUsedDefaultValue] = useState(false);
  const [selectedItems, setSelectedItems] = useState(props.defaultValue || []);
  
  const isSelected = (obj) =>{
    return selectedItems?.some(e => e[props.valuePropName] === obj[props.valuePropName]);
  }
  
  const navList = `${open ? 'block' : 'hidden'} absolute w-72 list-none bg-prev-default-bg_white overflow-auto max-h-60	mb-0 top-[40px]		`;

  const navOption = `py-1 px-2 `;

  const Select = `relative flex p-2 w-auto h-8 items-center ${open || selectedItems.length ? 'bg-prev-default-bg_orange2' : 'bg-prev-default-bg_silver'} `;

  const TagTotal = `flex w-5	h-5	mr-1 bg-prev-default-bg_orange1 justify-center rounded-xl	`;

  useEffect(() => {
    if (!open && props.onChange) {
      props.onChange(selectedItems);
    };

    if (
      props.defaultValue &&
      props.defaultValue.length > 0 &&
      !isEqual(selectedItems, props.defaultValue) &&
      !usedDefaultValue
    ) {

      setSelectedItems(props.defaultValue);
      setUsedDefaultValue(true);
    };

  }, []);

  const onSelectHandler = (ev, obj) => {
    ev.stopPropagation();

    const arr = [...selectedItems];
    const index = arr.findIndex(e => e[props.valuePropName] === obj[props.valuePropName]);

    if (index !== -1) {
      arr.splice(index, 1);
    } else {
      arr.push(obj);
    }
    setSelectedItems([...arr]);
    if (props.onChange) props.onChange(arr)
  }

  const renderList = () => {
    const itens = (props.lista || []).map((e, i) => (
      <div
        onClick={ev => onSelectHandler(ev, e)}
        key={`item_${i}`}
        value={e[props.valuePropName]}
        className={navOption}
        style={{ color: `${isSelected(e) ? '#ff8822' : 'rgba(0, 0, 0, 0.65)'}`, fontWeight: `${isSelected(e) ? '700' : '500'}`}}
      >
        {e[props.descPropName]}
      </div>
    ));

    return (
      <div
        className={navList}
        style={{ position: "absolute", zIndex: 99999999 }}
      >
        {itens}
      </div>
    );
  };

  const toggleHandler = () => {
    setOpen(!open);
  }
  
  const limparFiltro = e => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedItems([]);
    props.onClean();
  };
  
  return (
    <div
      className={Select}
      withFilter={selectedItems?.length}
      tabIndex={0}
      onBlur={() => {
        setOpen(false);
      }}
      onClick={e => {
        toggleHandler();
      }}
    >
      {selectedItems?.length > 0 && (
        <div className={TagTotal}>
          <span className="text-size12">{`+${selectedItems?.length}`}</span>
        </div>
      )}
      <span className="text-prev-default-text_white mr-3">{props.label}</span>

      {selectedItems?.length > 0 ? (
        <div onClick={limparFiltro}>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-[17px]" fill="none" viewBox="0 0 24 24" stroke="#FFFFFF" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="#FFFFFF" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      )}

      {renderList()}
    </div>
  );
};

export default MultiSelect;
