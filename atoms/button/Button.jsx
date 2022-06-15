function Button ({children, cor, intervalo, background, width, bold, style, ...props}) {
  return (
    <button
      {...props}
      style={{...style}}
      className={`${width ? width : "w-auto"} h-10 px-6 py-2 text-base rounded
        ${intervalo ? intervalo === "ANUAL" ? "bg-assine-borda_card_ano" : "bg-assine-borda_card_mes" : ""}
          ${background ? background : ""} ${cor ? cor : ""} ${bold ? bold : ""}`}
    >
      {children}
    </button>
  )
};

export default Button;
