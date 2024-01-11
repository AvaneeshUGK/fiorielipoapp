using MyService as service from '../../srv/service';

annotate service.book with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Value : id,
            Label : 'id',
        },
        {
            $Type : 'UI.DataField',
            Value : name,
            Label : 'name',
        },
    ]
);
annotate service.book with @(
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'form',
            ID : 'form',
            Target : '@UI.FieldGroup#form',
        },
    ],
    UI.FieldGroup #form : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : id,
                Label : 'id',
            },{
                $Type : 'UI.DataField',
                Value : name,
                Label : 'name',
            },],
    }
);
