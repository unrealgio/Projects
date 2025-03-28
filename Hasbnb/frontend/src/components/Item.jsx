import React from 'react'

const Item = () => {
    return (
        <a href='/' className='flex flex-col gap-2'>
            <img src="/img/quarto1.jpg" alt="" className='aspect-square object-cover rounded-2xl' />

            <div>

                <h3 className='text-xl font-semibold'>Cabo Frio, Rio de Janeiro</h3>

                <p className='truncate text-gray-600'>Colada à praia da Ferradura, a casa traz paz e plenitude, com cores que combinam com o cenário praieiro. A decoração foi feita pelo arquiteto e artista Hélio Pellegrino com dedicação e bom gosto. O espaço amplo está pronto para recepcionar os melhores momentos dos hóspedes. A vista mostra que todo pôr do sol é um espetáculo, e que vale ser assistido todos os dias da varanda. Aqui todo vento é brisa.
                    Venha presenciar o espetáculo à beira mar mágico e sugestivo: assim são as Casas Pellegrino.</p>

            </div>


            <p>
                <span className='font-semibold'>R$ 550</span> por noite
            </p>
        </a>
    )
}

export default Item