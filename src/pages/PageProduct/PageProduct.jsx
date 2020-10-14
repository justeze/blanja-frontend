import React from "react";
import classname from "../../helpers/classJoiner";
import styles from './styles.module.css';
import mainImg from "../../assets/img/page_product.png";
import secImg from "../../assets/img/card.png";
import starMedium from "../../assets/img/Star.png";
import { newData } from "../../utils/dummydata";
import Card from "../../components/Card/Card";

const PageProduct = () => {
    return (
        <div className={classname(styles.body)}>
            <div className={classname(styles.topContainer)}>
                <div className={classname(styles.imgProductContainer)}>
                    <div className={classname(styles.mainProductImgContainer)}>
                        <img
                            alt="product_img"
                            className={classname(styles.productMainImg)}
                            src={mainImg}
                        />
                    </div>
                    <div className={classname(styles.secondaryProductImgContainer)}>
                        <div className={classname(styles.secondaryProductImg)}>
                            <img
                                alt="product_img"
                                className={classname(styles.exampleImg)}
                                src={mainImg}
                            />
                            <img
                                alt="product_img"
                                className={classname(styles.exampleImg)}
                                src={mainImg}
                            />
                            <img
                                alt="product_img"
                                className={classname(styles.exampleImg)}
                                src={mainImg}
                            />
                            <img
                                alt="product_img"
                                className={classname(styles.exampleImg)}
                                src={mainImg}
                            />
                            <img
                                alt="product_img"
                                className={classname(styles.exampleImg)}
                                src={mainImg}
                            />
                        </div>
                    </div>
                </div>
                <div style={{ marginLeft: 28 }}>
                    <p style={{ fontWeight: 600, fontSize: 28 }}>Baju muslim pria</p>
                    <p style={{ fontWeight: 500, fontSize: 16, marginTop: 10 }}>zalora</p>
                    <p style={{ marginTop: 15.29 }}>[rating]</p>
                    <p style={{ fontWeight: 500, fontSize: 16, marginTop: 31.29 }}>price</p>
                    <p style={{ fontWeight: 'bold', fontSize: 33, marginTop: 10 }}>$ 20</p>
                    <p style={{ fontWeight: 600, fontSize: 16, marginTop: 10 }}>color</p>
                    <div className={classname(styles.colorContainer)}>
                        <button className={classname(styles.colorBtn)} style={{ backgroundColor: '#1A1A1A' }}>

                        </button>
                        <button className={classname(styles.colorBtn)} style={{ backgroundColor: '#D84242' }}>

                        </button>
                        <button className={classname(styles.colorBtn)} style={{ backgroundColor: '#4290D8' }}>

                        </button>

                        <button className={classname(styles.colorBtn)} style={{ backgroundColor: '#42D86C' }}>

                        </button>

                    </div>
                    <div className={classname(styles.sizeQtyTxtCont)}>
                        <div>
                            <p className={classname(styles.sizeQtyTxt)}>size</p>

                        </div>
                        <div>
                            <p className={classname(styles.sizeQtyTxt)} >quantity</p>

                        </div>

                    </div>
                    <div className={classname(styles.sizeQtyActCont)}>
                        <button className={classname(styles.sizeQtyBtn)}>
                            <p style={{ fontSize: 50, marginTop: -20.5 }}>-</p>

                        </button>
                        <p style={{ marginTop: 5, fontSize: 16, marginLeft: 10 }}>28</p>

                        <button className={classname(styles.sizeQtyBtn)} style={{ marginLeft: 10 }}>
                            <p style={{ fontSize: 30, marginTop: -3.5 }}>+</p>

                        </button>
                        <button className={classname(styles.sizeQtyBtn)} style={{ marginLeft: 80 }}>
                            <p style={{ fontSize: 50, marginTop: -20.5 }}>-</p>

                        </button>
                        <p style={{ marginTop: 5, fontSize: 16, marginLeft: 10 }}>28</p>

                        <button className={classname(styles.sizeQtyBtn)} style={{ marginLeft: 10 }}>
                            <p style={{ fontSize: 30, marginTop: -3.5 }}>+</p>

                        </button>
                    </div>
                    <div className={classname(styles.actionBtnContainer)}>
                        <button className={classname(styles.chatAddBtn)}>
                            chat
                            </button>

                        <button className={classname(styles.chatAddBtn)}>
                            add bag
                            </button>

                        <button className={classname(styles.buyBtn)}>
                            buy now
                            </button>

                    </div>
                </div>
            </div>
            <div style={{ marginTop: 38 }}>
                <p style={{ fontSize: 28, fontWeight: 600 }}>Product Information</p>
                <p style={{ marginTop: 40, fontSize: 20, fontWeight: 600 }}>Condition</p>
                <p style={{ marginTop: 10, fontSize: 28, color: 'red', fontWeight: 500 }}>New</p>
                <p style={{ marginTop: 40, fontSize: 20, fontWeight: 600 }}>Description</p>
                <p style={{ marginTop: 10, fontSize: 14 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.

                Donec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis. Etiam tincidunt tristique placerat. Pellentesque a consequat mauris, vel suscipit ipsum.
                Donec ac mauris vitae diam commodo vehicula. Donec quam elit, sollicitudin eu nisl at, ornare suscipit magna.

                Donec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis. In ultricies rutrum tempus. Mauris vel molestie orci.</p>
                <p style={{ fontSize: 28, fontWeight: 600, marginTop: 50 }}>Product review</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', marginTop: 50 }}>
                <p style={{ fontSize: 60, fontWeight: 500 }}>5.0</p>
                <p style={{ fontSize: 20, display: 'flex', alignSelf: 'center', marginTop: 5, color: '#9B9B9B' }}>/10</p>

                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 60.64 }}>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <img
                            alt=''
                            style={{ marginBottom: 8.57, height: 15.43, width: 16.71 }}
                            src={starMedium} />
                        <p style={{ marginLeft: 10.64 }}>5</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <img
                            alt=''
                            style={{ marginBottom: 8.57, height: 15.43, width: 16.71 }}
                            src={starMedium} />
                        <p style={{ marginLeft: 10.64 }}>4</p>

                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <img
                            alt=''
                            style={{ marginBottom: 8.57, height: 15.43, width: 16.71 }}
                            src={starMedium} />
                        <p style={{ marginLeft: 10.64 }}>3</p>

                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <img
                            alt=''
                            style={{ marginBottom: 8.57, height: 15.43, width: 16.71 }}
                            src={starMedium} />
                        <p style={{ marginLeft: 10.64 }}>2</p>

                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <img
                            alt=''
                            style={{ marginBottom: 8.57, height: 15.43, width: 16.71 }}
                            src={starMedium} />
                        <p style={{ marginLeft: 10.64 }}>1</p>

                    </div>
                </div>

            </div>
            <div style={{ display: 'flex', flexDirection: 'row', marginTop: -30 }}>
                <img
                    alt=''
                    style={{ marginRight: 8.57, height: 20.57, width: 22.29 }}
                    src={starMedium} />
                <img
                    alt=''
                    style={{ marginRight: 8.57, height: 20.57, width: 22.29 }}
                    src={starMedium} />
                <img
                    alt=''
                    style={{ marginRight: 8.57, height: 20.57, width: 22.29 }}
                    src={starMedium} />
                <img
                    alt=''
                    style={{ marginRight: 8.57, height: 20.57, width: 22.29 }}
                    src={starMedium} />
                <img
                    alt=''
                    style={{ marginRight: 8.57, height: 20.57, width: 22.29 }}
                    src={starMedium} />

            </div>
            <hr style={{ marginTop: 51.29, borderColor: "black" }} />
            <div style={{ marginTop: 50 }}>
                <p style={{ fontSize: 34, fontWeight: 700 }}>You can also like this</p>
                <p style={{ fontSize: 12 }}>You've never seen it before</p>
                <div className={classname("row", "no-gutters", styles.mt25)}>
                    {newData.map((item) => {
                        return <Card key={item.id} {...item} />;
                    })}
                </div>
            </div>


        </div>
    )
}

export default PageProduct