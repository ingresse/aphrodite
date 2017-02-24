'use strict';

angular.module('aphrodite-docs')
.constant('routes', [
    {
        id   : 'css',
        title: 'CSS',
        path : '/css/',
        items: [
            {
                id   : 'typography',
                title: 'Typography',
            },
            {
                id   : 'grid',
                title: 'Flexbox Grid',
            },
            {
                id   : 'form',
                title: 'Form',
            },
            {
                id   : 'button',
                title: 'Button',
            },
            {
                id   : 'table',
                title: 'Table',
            },
            {
                id   : 'lists',
                title: 'Lists',
            },
            {
                id   : 'navbar',
                title: 'Navbar',
            },
            {
                id   : 'drag-and-drop',
                title: 'Drag & Drop',
            },
            {
                id   : 'divider',
                title: 'Divider',
            },
            {
                id   : 'tag',
                title: 'Tag',
            },
            {
                id      : 'fonts',
                title   : 'Fonts (Optional)',
                optional: true,
            },
            {
                id      : 'icons',
                title   : 'Icons (Optional)',
                optional: true,
            },
        ]
    },
    {
        id   : 'components',
        title: 'Components',
        path : '/components/',
        items: [
            {
                id   : 'alert',
                title: 'Alert',
            },
            {
                id   : 'switch',
                title: 'Switch',
            },
            {
                id   : 'toggle',
                title: 'Toggle',
            },
            {
                id        : 'selector',
                title     : 'Selector',
                controller: 'ComponentSelectorController'
            },
            {
                id   : 'progress-bar',
                title: 'Progress Bar',
            },
            {
                id   : 'range',
                title: 'Range',
            },
        ]
    },
    {
        id   : 'services',
        title: 'Services',
        path : '/services/',
        items: [
            {
                id        : 'loader',
                title     : 'Loader',
                controller: 'ServiceLoaderController'
            },
            {
                id        : 'overlay',
                title     : 'Overlay',
                controller: 'ServiceOverlayController'
            },
        ]
    },
]);
