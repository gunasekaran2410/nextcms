import Head from "next/head"
import { Component } from 'react'
import { attributes, react as ProContent } from '../content/pro.md';
import styles from './Index.module.css'
import Container from 'react-bootstrap/Container'

export default class Mission extends Component {
    render() {
        let { title, pros, } = attributes;
        let base_asset_url = process.env.type == "dev" ? process.env.dev_asset : process.env.prod_asset;

        return ( <
            >
            <
            Head >
            <
            script src = "https://identity.netlify.com/v1/netlify-identity-widget.js" > < /script> < /
            Head >

            <
            section className = { styles.product_bnr } >
            <
            ProContent / >
            <
            h1 className = { styles.sec_content } > { title } < /h1> < /
            section >

            <
            section >
            <
            div className = "color-lines" >
            <
            img src = "../images/borders design.jpg" / >
            <
            /div>


            {
                pros.map((list, k) => ( <
                    Container key = { k } >
                    <
                    div className = { styles.text_center } >
                    <
                    img src = { base_asset_url + list.logo_image }
                    /> < /
                    div > <
                    p className = { styles.product_content } > { list.description } <
                    /p> <
                    div className = { styles.text_center } >
                    <
                    img src = { base_asset_url + list.product_image }
                    className = { styles.pro_image }
                    /> <
                    br / >
                    <
                    /div> < /
                    Container >

                ))
            }


            <
            /section> <
            br / > < br / >
            <
            />
        )
    }
}