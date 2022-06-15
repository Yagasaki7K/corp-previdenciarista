import CheckCircleOutlined from "../../atoms/Icons/CheckCircleOutlined";
import CloseCircle from "../../atoms/Icons/CheckCircle";
function TableBody ({title, data, intervalo}) {
  return (
    <>
      <div>
        <h1 className="py-5 px-4 text-[26px] font-semibold border border-prev-assine-bd_line_card">{title}</h1>
      </div>
          
      {data.map((item, i) => (
        <div key={i} className="flex justify-between border border-prev-assine-bd_line_card">
          <div className="py-5 px-4 font-semibold">{item[0]}</div>
          <div className="py-5 px-4 items-end">
            {item[intervalo === "MENSAL" ? 2 : 1] ?
              <CheckCircleOutlined /> :
              <CloseCircle />
            }
          </div>
      </div>
    ))}
    </>
  )
};

export default TableBody;
