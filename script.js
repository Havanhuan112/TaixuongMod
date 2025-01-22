document.getElementById('login-form').addEventListener('submit', function(event) {
            event.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (username === 'dieu' && password === 'huan') {
                document.getElementById('login-container').style.display = 'none';
                document.getElementById('menu').style.display = 'flex';
                showNotification();
            } else {
                alert('Thông tin đăng nhập không đúng!');
            }
        });

        function showLoveImages() {
            const loveImages = document.getElementById('menu-images');
            const loveMessage = document.getElementById('love-message');
            const heartExplosion = document.getElementById('heart-explosion');
            
            loveImages.style.display = 'flex';
            loveMessage.style.display = 'block';
            heartExplosion.style.display = 'block';

            setTimeout(function() {
                heartExplosion.style.display = 'none';
            }, 1000);
        }

        function showNotification() {
            document.getElementById('notification').style.display = 'block';
        }

        function closeNotification() {
            document.getElementById('notification').style.display = 'none';
        }