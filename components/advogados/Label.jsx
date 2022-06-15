function Label ({title}) {
  return (
    <div
      style={{lineHeight: "normal"}}
      className="
        mb-2.5
        font-semibold
        uppercase
        text-prev-default-text_white
        text-size12
        lg:text-base
      "
    >
        {title}
    </div>
  )
};

export default Label;
