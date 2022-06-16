const ContainerTestFree = () => {
    return (
        <div
            className="m-5 px-6 py-5 bg-orange-500 rounded lg:flex lg:items-center lg:justify-between lg:max-w-[1300px] lg:w-full"
            style={{ background: "#FF7522" }}
        >
            <div className="footer-orange">
                <p className="mb-5 text-[26px] text-tiny text-white" style={{ color: "#FFFFFF" }}>
                    O Prev já ajudou mais de <strong>70 mil</strong> advogados em todo o Brasil.
                    <br />
                    Acesse quantas <strong>petições</strong> e faça quantos <strong>cálculos quiser!</strong>
                </p>
                
                <div className="flex justify-center">
                    <button className="px-10 py-3 rounded border-sky-500 lg:py-[0px] lg:h-[54px]"
                        style={{ background: "#FFFFFF" }}
                    >
                        <a className="font-bold text-size18" style={{ color: "#FF7522" }} href="#">
                            Teste grátis por 15 dias
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
};

export default ContainerTestFree;
