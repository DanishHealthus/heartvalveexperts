export default function Head() {
    return (
        <>
            <script id="google-ads">
                {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-17726300204');
          `}
            </script>
        </>
    );
}