import { useState, useEffect } from 'react';
import { isEqual } from 'lodash';
import ChevronDown from '../../atoms/Icons/ChevronDownBlue';

const Select = (props) => {
  const [open, setOpen] = useState(false);
  const [usedDefaultValue, setUsedDefaultValue] = useState(false);
  const [selectedItems, setSelectedItems] = useState(props.defaultProps || []);

  useEffect(() => {
    if (!open && props.onChange) {
      props.onChange(selectedItems);
    }

    if (
      props.defaultValue &&
      props.defaultValue.length > 0 &&
      !isEqual(selectedItems, props.defaultValue) &&
      !usedDefaultValue
    ) {
      setSelectedItems(props.defaultProps);
      setUsedDefaultValue(true);
    }
  }, [open]);

  function onSelectHandler(ev, obj) {
    ev.stopPropagation();

    const { valuePropName } = props;
    const arr = [...selectedItems];
    const index = arr.findIndex((e) => e[valuePropName] === obj[valuePropName]);

    if (index !== -1) {
      arr.splice(index, 1);
    } else {
      arr.push(obj);
    }

    setSelectedItems([obj]);

    if (props.onChange) props.onChange([obj]);
    setOpen(!open);
  }

  function isSelected(obj) {
    const { valuePropName } = props;
    return selectedItems.some((e) => e[valuePropName] === obj[valuePropName]);
  }

  function renderList() {
    const { descPropName, valuePropName, lista } = props;

    const itens = (lista || []).map((e, i) => (
      <li
        onClick={(ev) => onSelectHandler(ev, e)}
        key={`item_${i}`}
        value={e[valuePropName]}
        className={`listItem ${isSelected(e) ? 'selected' : ''} ${e[valuePropName]}`}
      >
        {e[descPropName]}
      </li>
    ));

    return (
      <ul
        className={`lista lg:w-[406px] ${open ? "active" : ""}`}
        // style={{display: open ? "block" : ""}}
      >
        {itens}
      </ul>
    );
  };

  function toggleHandler() {
    setOpen(!open);
  }

  return (
    <div
      style={props.style}
      withFilter={selectedItems.length}
      tabIndex={0}
      onBlur={() => {
        setOpen(false);
      }}
      onClick={() => {
        toggleHandler();
      }}
      className={`select ${props.className || ''}`}
    >
      <div className="lg:text-sub_title20 lg:text-prev-default-select">
        {selectedItems.length > 0 ? (
          <span>{selectedItems[0].desc}</span>
        ) : (
          <span>{props.label}</span>
        )}
      </div>

      <ChevronDown className={`${open ? "anticon-down" : ""}`} />
      {renderList()}
    </div>
  );
}

Select.defaultProps = {
  valuePropName: 'value',
  descPropName: 'desc',
};

export default Select;
