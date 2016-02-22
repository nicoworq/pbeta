<!DOCTYPE html>
<html lang="es">
    <?php include_once './layout/head.php'; ?>
    <body>


        <?php $navActive= ''; include_once './layout/nav.php'; ?>


        <div class="main-container">


            <div class="pbeta-marketing-responsable">


                <div class="pbeta-marketing-responsable-header">
                    <h1>Marketing Responsable</h1>

                </div>

                <div class="pbeta-marketing-responsable-contenido">
                    <h2>Seamos el puente</h2>

                    <div class="container">
                        <div class="row pbeta-marketing-responsable-padding">
                            <div class="col-md-6">
                                <p class="first">Si bien tienen diferentes concepciones, tanto las empresas como las organizaciones sin fin de lucro necesitan ayuda o apoyo en cuestiones de comercialización. Desde nuestro lugar trabajamos como un puente entre ambos “mundos” con el objetivo de potenciar y mejorar la situación actual de diferentes instituciones.</p>
                            </div>
                            <div class="col-md-6">
                                <p class="second">Además durante todo el proceso de trabajo les brindamos a nuestros clientes la posibilidad de ayudar a estas organizaciones para que de forma conjunta mejoremos la calidad de vida de diversas comunidades.</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="pbeta-empresas-ong">
                    <div class="container">
                        <div class="pbeta-empresas-ong-contenido">
                            <div class="row">
                                <div class="col-md-12">
                                    <img src="img/empresas-ong.jpg" alt="5 Empresas 1 Ong"/>
                                    <h2>5 empresas = 1 ONG</h2>
                                    <p>“Cada 5 nuevos clientes comerciales adoptamos 1 ONG y trabajamos con ella”</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div class="pbeta-dar-para-crecer">

                    <div class="pbeta-dar-para-crecer-contenido">
                        <h3>Dar para crecer</h3>
                        <p>Buscamos un mundo mejor. Queremos ser el puente entre lasempresas y las ONG’s. Creemos que entre todos podemos hacer un mejor lugar para vivir. </p>
                        <p>Es por eso que a través del marketing acercamos a las empresas y a las organizaciones no gubernamentales en busca de sinergia y acciones en conjunto que traigan beneficios para ambas partes.</p>
                    </div>


                </div>

            </div>

            
            <?php include_once './layout/contact.php'; ?>

            <?php include_once './layout/map.php'; ?>


            <section class="pbeta-news-home">
                <div class="container">
                    <div class="row">

                        <div class="col-md-4 col-sm-12 col-xs-12">
                            <h3>Suscribite a nuestro Newsletter<br/><span>Deja tu email tranquilo, no hacemos Spam.</span></h3>
                        </div>
                        <div class="col-md-4 col-sm-12 col-xs-12">

                            <form id="form-suscribir-footer" action="" method="post">
                                <div class="ajaxing">
                                    <img src="img/loader.png" alt="Loading">
                                </div>                                
                                <input type="text" name="sex" placeholder="Sex">
                                <input type="text" name="email_visitante" placeholder="Ingresa tu email">
                                <button><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAARCAYAAADUryzEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAM9JREFUeNpi+v//PwMObA7EL4B4DRCz4VKHS7M0EH/8jwCbcBnCxIAdCAMxHxLfF4gXAjEzhko8Xsj6jwmWAjEzMV6A4QoshswCYkZiDcBlyHSYISxAX2hAMS5wA4hPALEFklgGEH8B4lKQASfRAoxYUALEP0DO+M9APvgLisZPFBjQDvKCGRBrElBYCVWHDPqBuJaYWKjEFwvkROEcYtNBJiUpUQ+L5lXomvFlprdosbMZiGNA0YauEJcBT4HYDYjfAPFaIA4B4l/YFAIEGADeMe8MWNVVCgAAAABJRU5ErkJggg=="/></button>
                            </form>
                        </div>
                        <div class="col-md-4 pull-right col-sm-12 col-xs-12">
                            <ul class="pbeta-redes">
                                <li><a href="#"><i class="worq-icon-facebook"></i></a></li>
                                <li><a href="#"><i class="worq-icon-linkedin"></i></a></li>
                                <li><a href="#"><i class="worq-icon-google"></i></a></li>
                            </ul>
                        </div>

                    </div>
                </div>


            </section>




            <?php include_once './layout/footer.php'; ?>
        </div>



  <?php include_once './layout/footer-scripts.php'; ?>



