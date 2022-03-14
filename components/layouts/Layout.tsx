import Head from 'next/head'
import React, { FC } from 'react'
import { Navbar } from '../ui/';
import { useRouter } from 'next/router';

interface Props {
    title?: string
}


const origin = (typeof window === 'undefined') ? '' : window.location.origin
//esto nos indica si esta en el front o en el backend
export const Layout: FC<Props> = ({ children, title }) => {

    // console.log({ origin });



    return (
        <>
            <Head>
                <title>{title || 'PokemonApp'}</title>
                <meta name='author' content='Joni Fernandez' />
                <meta name='description' content={`Informacion sobre el pokémon ${title}`} />
                <meta name='keywords' content={`${title}, pokémon, pokedex`} />

                <meta property="og:title" content={`Información sobre el ${title}`} />
                <meta property="og:description" content={`Esta es la pagina sobre ${title}`} />
                <meta property="og:image" content={`${origin}/img/banner.png`} />
            </Head>

            <Navbar />
            <main style={{ padding: '0px 20px' }}>
                {children}
            </main>

        </>
    )
}
