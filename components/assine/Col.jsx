function Col ({children, onClick, style}) {
  return (
    <div style={{...style}} onClick={onClick} className="w-full py-5 px-4 font-semibold border-assine-borda_col text-assine-subtextos text-base">
      {children}
    </div>
  )
};

export default Col;
