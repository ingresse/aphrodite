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
                id   : 'icons',
                title: 'Icons',
            },
            {
                id   : 'tag',
                title: 'Tag',
            },
            {
                id   : 'divider',
                title: 'Divider',
            },
            {
                id   : 'drag-and-drop',
                title: 'Drag & Drop',
            },
            {
                id   : 'table',
                title: 'Table',
            },
            {
                id   : 'navbar',
                title: 'Navbar',
            },
            {
                id   : 'lists',
                title: 'Lists',
            },
        ]
    },
    {
        id   : 'components',
        title: 'Components',
        path : '/components/',
        items: [
            {
                id   : 'switch',
                title: 'Switch',
            },
            {
                id   : 'range',
                title: 'Range',
            },
            {
                id   : 'progress-bar',
                title: 'Progress Bar',
            },
            {
                id   : 'alert',
                title: 'Alert',
            },
            {
                id        : 'selector',
                title     : 'Selector',
                controller: 'ComponentSelectorController'
            },
            {
                id   : 'toggle',
                title: 'Toggle',
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
