# Use an official PHP image as the base
# This image includes PHP and a web server (often Apache or Nginx with PHP-FPM)
FROM php:8.2-apache

# Set the working directory inside the container
WORKDIR /var/www/html

# Copy your PHP file (news.php) into the container's web root
# Assuming news.php is in the root of your GitHub repo
COPY news.php .

# If you have other HTML/JS files that need to be served by Apache
# COPY sending-page.html .
# COPY displaying-page.html .

# Expose port 80 (default for Apache)
EXPOSE 80

# The default command for php:8.2-apache will start Apache,
# so you usually don't need a CMD instruction for simple cases.
# If you need a specific command, you can add it, e.g.:
# CMD ["apache2-foreground"]
