import Link from 'next/link';
import { formatDate } from '../../../pages/api/utils/global';
import ArrowButton from '../../../atoms/buttonIcon';

const sections = [
    {
        key: 'noticias',
        value: 'Últimas notícias',
        link: 'https://previdenciarista.com/blog/noticias/',
        buttonText: 'ver mais notícias'
    },
    {
        key: 'colunas',
        value: 'Colunas',
        link: 'https://previdenciarista.com/blog/colunistas/',
        buttonText: 'ver mais colunas'
    },
    {
        key: 'blog',
        value: 'Blog',
        link: 'https://previdenciarista.com/blog/blog',
        buttonText: 'ir para o blog'
    },
    {
        key: 'decisoes',
        value: 'Decisões previdenciárias',
        link: 'https://previdenciarista.com/jurisprudencias',
        buttonText: 'ver mais decisões'
    }
];

const WordpressSection = (props) => {
    return (
        <div className="w-auto flex items-start justify-center m-5 bg-prev-default-text_white">
            <div className="max-w-[1080px] grid-flow-row grid-cols-1 gap-[70px] grid grid-template-columns blog-container">
                {sections.map(section => {
                    return (
                        <div className="flex flex-col items-start my-12 mt-[0px] blog-content " key={section.key}>
                            <h2 className="font-semibold text-size28 my-8 title-blog">{section.value}</h2>
                            {props[section.key].slice(0, 3).map(item => (
                                <Link
                                    passHref
                                    key={item.id}
                                    target="_blank"
                                    href={section.key === "decisoes" ? item.slug : item.link}
                                >
                                    <a className="mb-4">
                                        {item.imgSrc && <img src="/images/menu/noun-liquidacao.svg" alt={section.key} />}
                                        <span className="text-prev-home-date_word_pres text-size12">
                                            {formatDate(section.key === "decisoes" ? item.dataPublicacao : item.date)}
                                        </span>
                                        {section.key === "decisoes" ? <p className="font-calibri text-prev-home-p_word_pres text-base">{item.titulo}</p> : <p className="text-base">{item.title}</p>}
                                    </a>
                                </Link>
                            ))}
                            <ArrowButton href={section.link}>{section.buttonText}</ArrowButton>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default WordpressSection;
