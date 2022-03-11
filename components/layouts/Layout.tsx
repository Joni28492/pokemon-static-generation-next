import Head from 'next/head'
import React, { FC } from 'react'
import { Navbar } from '../ui/';

interface Props {
    title?: string
}

export const Layout: FC<Props> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title || 'PokemonApp'}</title>
                <meta name='author' content='Joni Fernandez' />
                <meta name='description' content={`Informacion sobre el pokémon ${title}`} />
                <meta name='keywords' content={`${title}, pokémon, pokedex`} />
            </Head>

            <Navbar />
            <main style={{ padding: '0px 20px' }}>
                {children}
            </main>

        </>
    )
}
