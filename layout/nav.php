<div class="nav-container">	
    <nav class="nav-1 fixed">
        <div class="navbar">
            <div class="container">
                <div class="row">
                    <div class="col-md-3 col-sm-6 col-xs-6">
                        <a href="index.php">
                            <img class="logo" alt="Logo Proyecto Beta" src="img/logo-proyecto-beta.svg">
                        </a>
                    </div>

                    <div class="col-md-1 col-sm-6 col-xs-6 hidden-lg hidden-md">                               
                        <div class="mobile-toggle">
                            <div class="upper"></div>
                            <div class="middle"></div>
                            <div class="lower"></div>
                        </div>
                    </div>

                    <div class="col-md-9 text-right col-sm-12 col-xs-12 menu-container">
                        <!--
                        <ul class="pbeta-redes pbeta-redes-header">
                            <li><a href="https://www.facebook.com/ProyectoBetaMKT" target="blank"><i class="worq-icon-facebook"></i></a></li>
                            <li><a href="https://www.linkedin.com/company/proyecto-beta?trk=biz-companies-cym" target="blank"><i class="worq-icon-linkedin"></i></a></li>
                            <li><a href="https://plus.google.com/u/0/103707798096625533035/posts" target="blank"><i class="worq-icon-google"></i></a></li>
                        </ul>
                        -->

                        <ul class="menu">
                            <li>
                                <a class="inner-link <?php echo $navActive === 'home' ? 'active' : ''; ?>" href="index.php#home">
                                    Home
                                </a>
                            </li>
                            
                            <li>
                                <a class="inner-link <?php echo $navActive === 'responsable' ? 'active' : ''; ?>" href="marketing-responsable.php">
                                    Marketing responsable
                                </a>
                            </li>

                            <li>
                                <a class="inner-link <?php echo $navActive === 'institucional' ? 'active' : ''; ?>" href="index.php#institucional">
                                    Institucional
                                </a>
                            </li>

                            <li>
                                <a class="inner-link <?php echo $navActive === 'servicios' ? 'active' : ''; ?>" href="servicios.php">
                                    Servicios
                                </a>
                            </li>

                            <li>
                                <a class="inner-link <?php echo $navActive === 'trabajamos' ? 'active' : ''; ?>" href="como-trabajamos.php">
                                    Como trabajamos
                                </a>
                            </li>

                            <li>
                                <a class="inner-link <?php echo $navActive === 'exito' ? 'active' : ''; ?>" href="index.php#exito">
                                    Clientes
                                </a>
                            </li>
                            <li>
                                <a class="inner-link contact" href="#contacto">
                                    Contacto
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</div>