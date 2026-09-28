export const revalidate = 86400; // Cache XSL for 24 hours

export async function GET() {
  const xsl = `<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
  xmlns:html="http://www.w3.org/TR/REC-html40"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap | World Track Travel</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style type="text/css">
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
            color: #1e293b;
            background-color: #f8fafc;
            margin: 0;
            padding: 30px 20px;
          }
          #sitemap {
            max-width: 1000px;
            margin: 0 auto;
            background: #ffffff;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.05);
            padding: 32px;
          }
          h1 {
            color: #0f172a;
            font-size: 26px;
            font-weight: 800;
            margin-top: 0;
            margin-bottom: 8px;
            letter-spacing: -0.02em;
          }
          p.intro {
            color: #64748b;
            font-size: 14px;
            margin-bottom: 24px;
            line-height: 1.5;
          }
          p.intro a {
            color: #0284c7;
            text-decoration: none;
            font-weight: 600;
          }
          p.intro a:hover {
            text-decoration: underline;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 16px;
            font-size: 14px;
          }
          th {
            background-color: #f1f5f9;
            color: #334155;
            text-align: left;
            padding: 12px 16px;
            font-weight: 700;
            border-bottom: 2px solid #e2e8f0;
          }
          td {
            padding: 12px 16px;
            border-bottom: 1px solid #f1f5f9;
            color: #334155;
            word-break: break-all;
          }
          tr:nth-child(even) {
            background-color: #f8fafc;
          }
          tr:hover {
            background-color: #f0f9ff;
          }
          td a {
            color: #0284c7;
            text-decoration: none;
            font-weight: 500;
          }
          td a:hover {
            text-decoration: underline;
          }
          .badge {
            display: inline-block;
            background: #e0f2fe;
            color: #0369a1;
            font-size: 12px;
            font-weight: 600;
            padding: 3px 8px;
            border-radius: 9999px;
          }
          .footer {
            margin-top: 32px;
            padding-top: 16px;
            border-top: 1px solid #e2e8f0;
            color: #94a3b8;
            font-size: 12px;
            display: flex;
            justify-content: space-between;
          }
        </style>
      </head>
      <body>
        <div id="sitemap">
          <h1>XML Sitemap</h1>
          <p class="intro">
            This XML Sitemap is generated for search engines like Google and Bing.
            Learn more about <a href="https://sitemaps.org" target="_blank" rel="noopener">sitemaps.org</a>.
          </p>

          <xsl:if test="count(sitemap:sitemapindex/sitemap:sitemap) &gt; 0">
            <p class="intro">
              This XML Sitemap Index contains <strong><xsl:value-of select="count(sitemap:sitemapindex/sitemap:sitemap)"/></strong> sub-sitemaps.
            </p>
            <table>
              <thead>
                <tr>
                  <th width="70%">Sitemap URL</th>
                  <th width="30%">Last Modified</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
                  <tr>
                    <td>
                      <a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a>
                    </td>
                    <td>
                      <xsl:value-of select="concat(substring(sitemap:lastmod,0,11), ' ', substring(sitemap:lastmod,12,8))"/>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </xsl:if>

          <xsl:if test="count(sitemap:urlset/sitemap:url) &gt; 0">
            <p class="intro">
              This XML Sitemap contains <strong><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></strong> URLs.
            </p>
            <table>
              <thead>
                <tr>
                  <th width="60%">URL</th>
                  <th width="10%">Images</th>
                  <th width="15%">Change Freq</th>
                  <th width="15%">Last Modified</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <tr>
                    <td>
                      <a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a>
                    </td>
                    <td>
                      <span class="badge"><xsl:value-of select="count(image:image)"/></span>
                    </td>
                    <td>
                      <xsl:value-of select="sitemap:changefreq"/>
                    </td>
                    <td>
                      <xsl:value-of select="concat(substring(sitemap:lastmod,0,11), ' ', substring(sitemap:lastmod,12,8))"/>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </xsl:if>

          <div class="footer">
            <span>World Track Travel XML Sitemap System</span>
            <span>Generated dynamically by Next.js</span>
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>`;

  return new Response(xsl, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
