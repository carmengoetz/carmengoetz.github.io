<template>
    <div class="container footer">
        <div class="row">
            <div class="col-md-4">
                <span class="copyright">Copyright &copy; Carmen Goetz 2019</span>
            </div>
            <div class="col-md-4">
                <ul class="list-inline social-buttons">
                    <li class="list-inline-item">
                        <a href="https://linkedin.com/in/carmengoetz/" target="_blank">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a href="https://www.facebook.com/carmen.goetz" target="_blank">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a href="https://www.instagram.com/carmenbgoetz" target="_blank">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a href="https://github.com/carmengoetz" target="_blank">
                            <i class="fab fa-github"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="col-md-4"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
/*#region FOOTER*/
.footer {
    padding: 25px 0;
    text-align: center;
}

.footer span.copyright {
    font-size: 90%;
    line-height: 40px;
    text-transform: none;
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
}

.footer ul.quicklinks {
    font-size: 90%;
    line-height: 40px;
    margin-bottom: 0;
    text-transform: none;
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
}

ul.social-buttons {
    margin-bottom: 0;
}

ul.social-buttons li a {
    font-size: 20px;
    line-height: 50px;
    display: block;
    width: 50px;
    height: 50px;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    color: white;
    border-radius: 100%;
    outline: none;
    background-color: #212529;
}

ul.social-buttons li a:active, ul.social-buttons li a:focus, ul.social-buttons li a:hover {
    background-color: #9DC5CA;
}
/*#endregion FOOTER*/
</style>