# Nature-et-moi
<!DOCTYPE html>
<html lang="en">
          
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/js/all.min.js"></script>
    <title>Prudent- Boutique de plantes</title>
</head>

<body>
    <section id="home" class="home-container">
        <header id="header" class="header">
            <img src="images/logo.png" alt="Nature Emoi" class="logo">
            <ul class="nav-links">
                <li>
                    <a href="#" data-text="Accueil">Accueil</a>
                </li>
                <li>
                    <a href="#best-sales" data-text="Nos meilleures ventes">Nos meilleures ventes</a>
                </li>
                <li>
                    <a href="#plants" data-text="Nos plantes">Nos plantes</a>
                </li>
            </ul>
            <div class="burger-container">
                <div class="burger"></div>
            </div>
        </header>
        <div class="landing">
            <h1 class="big-title">Nature Emoi, meilleur que le chocolat.</h1>
            <a href="#delivery" class="delivery-link">
                <span class="scroll-text" data-text="Scroll">Scroll</span>
                <i class="scroll-icon fas fa-angle-down"></i>
            </a>
        </div>
    </section>
    <section id="delivery" class="delivery-container">
        <div class="shop">
            <i class="delivery-icon fas fa-store"></i>
            <p class="box-content">
                Nos magasins à votre service
            </p>
        </div>
        <div class="withdrawal">
            <i class="delivery-icon fas fa-people-carry"></i>
            <p class="box-content">
                Retrait en magasin sans contact
            </p>
        </div>
        <div class="delivery">
            <i class="delivery-icon fas fa-truck"></i>
            <p class="box-content">
                Livraison à domicile sans contact
            </p>
        </div>
    </section>
    <section id="best-sales" class="best-sales-container">
        <h1 class="section-title">Meilleures ventes</h1>
        <div class="best-plants">
            <a href="#" class="plant-box no-grid plant1">
                <div class="plant-bio">
                    <h1 class="plant-name">Plante</h1>
                    <h3 class="plant-price">30,99€</h3>
                </div>
            </a>
            <a href="#" class="plant-box no-grid plant2">
                <div class="plant-bio">
                    <h1 class="plant-name">Plante</h1>
                    <h3 class="plant-price">30,99€</h3>
                </div>
            </a>
            <a href="#" class="plant-box no-grid plant3">
                <div class="plant-bio">
                    <h1 class="plant-name">Plante</h1>
                    <h3 class="plant-price">30,99€</h3>
                </div>
            </a>
            <a href="#" class="plant-box no-grid plant4">
                <div class="plant-bio">
                    <h1 class="plant-name">Plante</h1>
                    <h3 class="plant-price">30,99€</h3>
                </div>
            </a>
        </div>
    </section>
    <section id="plants" class="plants-container">
        <h1 class="section-title">Nos plantes</h1>
        <div class="grid-plants">
            <a href="#" class="plant-box grid plant-grid1">
                <div class="plant-bio">
                    <h1 class="plant-name">Plante</h1>
                    <h3 class="plant-price">30,99€</h3>
                </div>
            </a>
            <a href="#" class="plant-box grid plant-grid2">
                <div class="plant-bio">
                    <h1 class="plant-name">Plante</h1>
                    <h3 class="plant-price">30,99€</h3>
                </div>
            </a>
            <a href="#" class="plant-box grid plant-grid3">
                <div class="plant-bio">
                    <h1 class="plant-name">Plante</h1>
                    <h3 class="plant-price">30,99€</h3>
                </div>
            </a>
            <a href="#" class="plant-box grid plant-grid4">
                <div class="plant-bio">
                    <h1 class="plant-name">Plante</h1>
                    <h3 class="plant-price">30,99€</h3>
                </div>
            </a>
            <a href="#" class="plant-box grid plant-grid5">
                <div class="plant-bio">
                    <h1 class="plant-name">Plante</h1>
                    <h3 class="plant-price">30,99€</h3>
                </div>
            </a>
            <a href="#" class="plant-box grid plant-grid6">
                <div class="plant-bio">
                    <h1 class="plant-name">Plante</h1>
                    <h3 class="plant-price">30,99€</h3>
                </div>
            </a>
        </div>
    </section>
    <footer id="footer" class="footer">
        <span class="copyrights">&copy; 2023- Nature Emoi</span>
        <a href="#" class="conditions">Condition générales de vente</a>
    </footer>
    <script>
        const burgerContainer = document.querySelector('.burger-container');
        const navLinks = document.querySelector('.nav-links');

        burgerContainer.addEventListener('click', () => {
            burgerContainer.classList.toggle('active');
            navLinks.classList.toggle('active');
        })
    </script>
</body>

</html>
