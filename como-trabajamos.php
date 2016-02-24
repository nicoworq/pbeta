<!DOCTYPE html>
<html lang="es">
    <?php include_once './layout/head.php'; ?>
    <body>
        <?php
        $navActive = 'trabajamos';
        include_once './layout/nav.php';
        ?>
        <div class="main-container">
            <div class="pbeta-como-trabajamos">
                <div class="pbeta-como-trabajamos-header">
                    <h1>¿Cómo trabajamos?</h1>
                    <p>En Proyecto Beta escuchamos a nuestros clientes, analizamos sus necesidades y creamos soluciones a medida para cada<br/>
                        proyecto. Acompañamos el crecimiento progresivo y sostenido brindando en cada nivel el mix de herramientas adecuado<br/>
                        para lograr los resultados esperados.
                    </p>
                </div>                    
                <div class="pbeta-como-trabajamos-contenido">
                    <h2>Trabajamos mediante niveles</h2>
                    <!--<p>Analizamos tu situación actual, definimos en que nivel estas y cuales son tus necesidades, determinamos cuales son las herramientas<br/>
                        indicadas para tu proyecto, analizamos, medimos y acompañamos los resultados obtenidos para poder brindarte nuevas herramientas<br/>
                        que potencien tu crecimiento</p>-->

                    <div class="pbeta-como-trabajamos-info">

                        <img src="img/forma-de-trabajo-min.png" alt="Forma de Trabajo" />
                    </div>
                </div>
            </div>
            <?php include_once './layout/success.php'; ?>
            <?php include_once './layout/contact.php'; ?>
            <?php include_once './layout/map.php'; ?>
            <?php include_once './layout/newsletter-redes.php'; ?>
            <?php include_once './layout/footer.php'; ?>
        </div>
        <?php
        include_once './layout/footer-scripts.php';
        