# Use an official PHP image as the base
# This image includes PHP and a web server (often Apache or Nginx with PHP-FPM)
FROM php:8.2-apache

# Set the working directory inside the container
# This is where your web server (Apache) will look for files
WORKDIR /var/www/html

# Copy your PHP file (news.php) into the container's web root
# IMPORTANT: The path here should be relative to the root of your GitHub repository.
# Based on your screenshot, news.php is inside the 'livenews' directory.
COPY livenews/news.php .

# If you have other HTML/JS files that need to be served by Apache
# and are in the 'livenews' directory, you would copy them similarly:
# COPY livenews/sending-page.html .
# COPY livenews/displaying-page.html .

# Expose port 80 (default for Apache)
EXPOSE 80

# The default command for php:8.2-apache will start Apache,
# so you usually don't need a CMD instruction for simple cases.
# If you need a specific command, you can add it, e.g.:
# CMD ["apache2-foreground"]
