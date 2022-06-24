import React from 'react';
import { Card, Image, Group, Badge, Text, Button} from '@mantine/core';

export const ProductCard = props => {
    const {id, path, brand, description, add} = props;
    return (
        <div style={{ width: 400, margin: 'auto', height: 400, maxHeight: 400}}>
            <Card shadow="sm" p="lg" style={{width: '100%', height: '100%'}}>
                <Card.Section>
                    <Image src={path} height={220} width={370} fit="contain"></Image>
                </Card.Section>

                <Group position="apart" style={{ marginBottom: 5, marginTop: '5px' }}>
                    <Text weight={500}>{brand}</Text>
                    <Badge color="pink" variant="light">
                        On Sale
                    </Badge>
                </Group>

                <Text size="sm" style={{ color: 'gray', lineHeight: 1.5, height: '80px' }} title={description}>
                   {description}
                </Text>

                <Button 
                    variant="light" 
                    color="blue" 
                    fullWidth style={{ marginTop: 14 }} 
                    onClick = {() => add({id, path, brand, description})}
                >
                    Add to Wish list
                </Button>
            </Card>            
        </div>
    );
};