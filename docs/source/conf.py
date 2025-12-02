# -- Project information -----------------------------------------------------
project = 'Dao Kim Wiki'
author = 'NGUYEN THI DAO KIM'
version = '1.0.0'
release = '1.0'

# -- General configuration ---------------------------------------------------
extensions = [
    'sphinx.ext.duration',
    'sphinx.ext.doctest',
    'sphinx.ext.autodoc',
    'sphinx.ext.autosummary',
    'sphinx.ext.intersphinx',
]

templates_path = ['_templates']
exclude_patterns = []

# -- HTML theme --------------------------------------------------------------
html_theme = 'sphinx_rtd_theme'

html_logo = 'image/daokim-logo.png'
html_favicon = 'image/weblogo.png'

html_static_path = ['_static']

html_css_files = [
    'css/dk_style.css',
    'css/game.css',
    'css/custom.css',
]

html_js_files = [
    'js/xlsx.full.min.js',
    'js/student_picker.js',
    'js/question_picker.js',
    'js/team_picker.js',
]

html_theme_options = {
    'logo_only': True,
    'collapse_navigation': True,
    'sticky_navigation': True,
    'includehidden': True,
}

html_context = {
   'display_github': True,
   'github_user': 'username',
   'github_repo': 'reponame',
   'github_version': 'master',
}
